import { FaGithub, FaTwitter, FaLink } from "react-icons/fa";

const Footer = () => {

    return (
        <footer className="w-full py-4 px-6 text-center border-t border-gray-600 bg-opacity-80">
            <div className="flex flex-col items-center gap-2">
                <p className="text-sm text-gray-400">
                    Datos obtenidos de{" "}
                    <a
                        href="https://glbes.dokkaninfo.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-400 hover:underline"
                    >
                        Dokkan Info
                    </a>
                </p>
                <div className="flex gap-4">
                    <a
                        href="https://github.com/AletzMan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-orange-400"
                    >
                        <FaGithub size={20} />
                    </a>
                    <a
                        href="https://twitter.com/alxgarcias"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-orange-400"
                    >
                        <FaTwitter size={20} />
                    </a>
                    <a
                        href="https://alejandro-garcia.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-orange-400"
                    >
                        <FaLink size={20} />
                    </a>
                </div>
                <p className="text-xs text-gray-500">
                    &copy; {new Date().getFullYear()} Alejandro García Alonso
                </p>
            </div>
        </footer>
    );
};

export default Footer;
