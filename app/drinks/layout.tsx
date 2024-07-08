import { ReactNode } from "react";

interface DrinksLayoutProps{
    children:ReactNode;
}

const DrinksLayout = ({children} : DrinksLayoutProps) => {
    return (
        <div className="max-w-xl">
            <div className="mockup-code mb-6">
                <pre data-prefix='$'>
                    <code>npx create-next-app@latest nextjs Learning</code>
                </pre>
            </div>
            {children}
        </div>
    )
}

export default DrinksLayout;