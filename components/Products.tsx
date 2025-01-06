import Card from "./Card";
import Image from "next/image.js";

export default function Products() {
    return (
        <div className="my-20 md:my-32">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white md:w-2/3 md:text-3xl text-orange lg:text-4xl">Proven Results</h3>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white md:w-2/3 md:text-3xl text-orange lg:text-4xl">Customize your Proven Results</h3>
            <div className="relative mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <Image className="w-10" src="/images/icons/Efficiency.svg" alt="safety icon illustration" height="512" width="512" />
                    <div>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Efficiency</h4>
                        <p className="mt-3 text-gray-600 dark:text-gray-400">Optimize performance and maximize ROI.</p>
                    </div>
                </Card>
                <Card>
                    <Image className="w-10" src="/images/icons/Superhuman.svg" alt="payment card icon illustration" height="512" width="512" />
                    <div>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Superhuman</h4>
                        <p className="mt-3 text-gray-600 dark:text-gray-400"> Maximize your reach and response time to delight with superior customer service.</p>
                    </div>
                </Card>
                <Card>
                    <Image className="w-10" src="/images/icons/No limits.svg" alt="xp icon illustration" height="512" width="512" />
                    <div>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">No Limits</h4>
                        <p className="mt-3 text-gray-600 dark:text-gray-400">Get a flexible and scalable platform to expedite the top and middle funnel activities.</p>
                    </div>
                </Card>
            </div>
        </div>
    )
}