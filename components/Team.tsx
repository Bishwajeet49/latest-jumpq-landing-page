import TeamCard from "./TeamCard";
import Container from "./Container";
import { SiFacebook, SiLinkedin, SiX } from '@icons-pack/react-simple-icons';



const teamData = [
    {
        name: 'Sandra Walton',
        deg: 'CEO SomeCompany',
        quote: "I'm loving these templates! Very nice features and layouts.",
        image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2694&q=80',
    },
    {
        name: 'Khushal',
        deg: 'CoFounder & CTO JumpQ',
        quote: 'Extremely helpful in every single project we have released.',
        image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1700&q=80',
    },
    {
        name: 'Neeraj',
        deg: 'CoFounder & CTO JumpQ',
        quote: 'Extremely helpful in every single project we have released.',
        image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1700&q=80',
    },
    {
        name: 'Aniket',
        deg: 'Product & Growth',
        quote: 'Extremely helpful in every single project we have released.',
        image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1700&q=80',
    },
    {
        name: 'Pravin',
        deg: 'Partnerships',
        quote: 'Extremely helpful in every single project we have released.',
        image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1700&q=80',
    },
    {
        name: 'Pramod',
        deg: 'Customer Success',
        quote: 'Extremely helpful in every single project we have released.',
        image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1700&q=80',
    },
];

export default function Team() {
    return (
        <div className="pt-32 md:pt-20 text-gray-600 dark:text-gray-300" id="reviews">
            <Container>
                <div
                    id='testimonials'
                    className='flex w-full items-center justify-center border-t border-gray-200 px-8 pt-10 md:pt-16 lg:pt-24 xl:px-0 xl:pt-40'>
                    <div className='mx-auto max-w-7xl'>
                        <div className='flex-col items-center'>
                            <div className='mx-auto flex h-full w-full max-w-2xl flex-col items-center justify-center pr-8 text-center'>
                                <p className='my-5 text-base font-medium uppercase tracking-tight text-team-orange'>
                                    Our Team is Passionate About What We Do
                                </p>
                                <h2 className='text-center text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl'>
                                    Meet Our Experts
                                </h2>
                                <p className='my-6 text-xl font-medium text-gray-600 dark:text-gray-300'>
                                    Don't just take our word for it—get to know the talented individuals
                                    behind our success. Read about the diverse backgrounds and expertise
                                    of the team members who drive our vision forward.
                                </p>
                            </div>

                            <div className='mx-auto flex w-full max-w-full flex-col items-center justify-center py-8 xl:max-w-full xl:flex-row'>
                                <div className='flex w-full flex-wrap justify-center gap-x-3 gap-y-5'>
                                    {teamData.map((data, i) => {
                                        return (
                                            <div
                                                key={i}
                                                className='max-w-17'>
                                                <TeamCard>
                                                    <div className='m-auto h-32 w-32'>
                                                        <img
                                                            src={data.image}
                                                            alt=''
                                                            className='aspect-square rounded-full object-cover'
                                                        />
                                                    </div>
                                                    <p className='text-center font-bold text-gray-700 dark:text-white'>
                                                        {data.name}
                                                    </p>
                                                    <p className='text-center font-semibold text-orange'>
                                                        {data.deg}
                                                    </p>
                                                    <p className='text-center text-gray-500 dark:text-gray-300'>{data.quote}</p>
                                                    <div className=' flex items-center justify-center gap-3'>
                                                        <a href='#'>
                                                            <SiX />
                                                        </a>
                                                        <a href='#'>
                                                            <SiFacebook />
                                                        </a>
                                                        <a href='#'>
                                                            <SiLinkedin />
                                                        </a>
                                                    </div>
                                                </TeamCard>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}