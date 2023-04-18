import { VscMail, VscGithub } from "react-icons/vsc"

export default function Footer() {
    return (
        <footer className="bg-[#aad6e8] w-full mt-10 py-8">
            <div className="max-w-7xl container mx-auto px-4 flex justify-between items-center">
                <div>
                    <p>&copy; 2023 IFN Press. All Rights Reserved</p>
                </div>
                <div className="flex gap-4">
                    <a href="mailto:youremail@example.com"><VscMail fontSize={30} /></a>
                    <a href="https://github.com/Fidesnoella"><VscGithub fontSize={25} /></a>
                </div>
            </div>
        </footer>
    );
}
