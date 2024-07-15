import {Medal} from "lucide-react";
import { Button } from "@/components/ui/button";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import {cn} from "@/lib/utils";
import Link from "next/link";

const headingFont = localFont({
    src: "../../public/teenspike.woff2",
});

const textFont = Poppins({
    subsets: ["latin"],
    weight: [
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900"
    ]
})

const MarketingPage = () => {
    return (
        <div className="flex items-center justify-center flex-col">
            <div className={cn(
                "flex items-center justify-center flex-col",
                headingFont.className,
            )}>
                <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
                    <Medal className="h-6 w-6 mr-2"/>
                    Best Collaborative Task Manager
                </div>
                {/* <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
                    Task-i-Nator
                </h1> */}
                <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white px-4 p-4 rounded-md w-fit">
                    Task-I-nator
                </div>
            </div>
            <div className={cn(
                "text-sm md:text-xl text-neutral-400 mt-8 max-w-xs md:max-w-2xl text-center mx-auto",
                textFont.className,
            )}>
                Collaborate, assign, and track tasks with ease. Task-Inator is the best when it comes to managing tasks for your organization.
            </div>
            <div className="mt-8">
                <Button className="mt-2 bg-gradient-to-r to-violet-600 from-fuchsia-600" size="lg" asChild>
                    <Link href="/sign-up">
                        Get Started
                    </Link>
                </Button>
            </div>
        </div>
    );
};

export default MarketingPage;