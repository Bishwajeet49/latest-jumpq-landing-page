import Card from "./Card";
import Image from "next/image.js";

export default function Company() {
    return (
        <div className="">
            <div className="relative mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                <Card>
                    {/* <Image className="w-10" src="/images/security.webp" alt="safety icon illustration" height="512" width="512" /> */}
                    <div>
                        <h4 className="text-xl font-semibold text-orange">The Challenge</h4>
                        <p className="mt-3 text-gray-600 dark:text-gray-400">Our buyers have changed the way they buy, but we haven't evolved our sales strategies, workflows, and technologies to match their preferences. The old way of sales engagement — relying on templates and manual efforts to scale — won't cut it anymore.</p>
                    </div>
                </Card>
                <Card>
                    {/* <Image className="w-10" src="/images/card.webp" alt="payment card icon illustration" height="512" width="512" /> */}
                    <div>
                        <h4 className="text-xl font-semibold text-orange">Our Solution</h4>
                        <p className="mt-3 text-gray-600 dark:text-gray-400"> We need a new way - one powered by generative AI - to find and qualify prospects, engage with high impact, and execute dynamic touch patterns in a buyer-centric way. JumpQ is committed to owning the entire journey for your success, providing you with an unparalleled advantage. You. Amplified.</p>
                    </div>
                </Card>
                {/* <Card>
                    <Image className="w-10" src="/images/xp.webp" alt="xp icon illustration" height="512" width="512" />
                    <div>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">No Limits</h4>
                        <p className="mt-3 text-gray-600 dark:text-gray-400">Get a flexible and scalable platform to expedite the top and middle funnel activities.</p>
                    </div>
                </Card> */}
            </div>
        </div>
    )
}