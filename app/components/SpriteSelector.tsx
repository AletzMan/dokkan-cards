/* eslint-disable react-hooks/exhaustive-deps */
import { URL_SPRITE_SHEET } from "@/app/constants";
import { useEffect, useRef, useState } from "react";

interface SpriteFrame {
    x: number;
    y: number;
    width: number;
    height: number;
}

interface SpriteAnimatorProps {
    frames: SpriteFrame[];
    backgroundFrame: SpriteFrame;
    className?: string;
    scale: number;
}

const SpriteCanvas = ({ frames, backgroundFrame, className, scale }: SpriteAnimatorProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const sprite = useRef(new Image());
    const [frameIndex, setFrameIndex] = useState(0);
    const [opacity, setOpacity] = useState(1);
    const [isHidden, setIsHidden] = useState(false);
    const [rotation, setRotation] = useState(0);
    const [bgRotation, setBgRotation] = useState(0);

    useEffect(() => {
        sprite.current.src = URL_SPRITE_SHEET;
        sprite.current.onload = draw;
    }, []);

    const draw = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.save();

        // Centrar todo el contenido en el canvas
        ctx.translate(canvasWidth / 2, canvasHeight / 2);

        // 🔵 Dibujar fondo animado girando
        ctx.save();
        ctx.rotate((bgRotation * Math.PI) / 180);
        const { x: bgX, y: bgY, width: bgWidth, height: bgHeight } = backgroundFrame;
        ctx.globalAlpha = 0.4; // Ajustado para mejor visibilidad
        ctx.drawImage(sprite.current, bgX, bgY, bgWidth, bgHeight, -bgWidth * scale / 2, -bgHeight * scale / 2, (bgWidth * scale) - 10, (bgHeight * scale) - 10);
        ctx.restore();

        // 🔴 Dibujar el sprite principal animado
        if (!isHidden) {
            ctx.save();
            ctx.globalAlpha = opacity;
            ctx.rotate((rotation * Math.PI) / 180);
            const { x, y, width, height } = frames[frameIndex];
            ctx.drawImage(sprite.current, x, y, width, height, -width * scale / 2, -height * scale / 2, width * scale, height * scale);
            ctx.restore();
        }

        ctx.restore();
    };

    useEffect(() => {
        draw();
    }, [frameIndex, opacity, isHidden, rotation, bgRotation]);

    useEffect(() => {
        let fadeOut: NodeJS.Timeout;
        let fadeIn: NodeJS.Timeout;
        let switchFrame: NodeJS.Timeout;
        let hideFrame: NodeJS.Timeout;

        const animateFrame = () => {
            setOpacity(1);
            setRotation((prev) => (prev + 90) % 360);
            setBgRotation((prev) => (prev + 10) % 360); // Ajustado para rotación más fluida

            fadeOut = setTimeout(() => {
                let fadeStep = 1;
                const fadeInterval = setInterval(() => {
                    fadeStep -= 0.1;
                    setOpacity(fadeStep);
                    if (fadeStep <= 0) clearInterval(fadeInterval);
                }, 50);
            }, 100);

            fadeIn = setTimeout(() => setOpacity(1), 300);
            switchFrame = setTimeout(() => {
                setFrameIndex((prev) => (prev + 1) % frames.length);
            }, 350);

            if (Math.random() < 0.4) {
                hideFrame = setTimeout(() => {
                    setIsHidden(true);
                    setTimeout(() => setIsHidden(false), 200 + Math.random() * 500);
                }, 100);
            }
        };

        const interval = setInterval(animateFrame, 250);

        return () => {
            clearInterval(interval);
            clearTimeout(fadeOut);
            clearTimeout(fadeIn);
            clearTimeout(switchFrame);
            clearTimeout(hideFrame);
        };
    }, [frameIndex]);

    return <canvas ref={canvasRef} width={110} height={110} className={className} />;
};

export default SpriteCanvas;
