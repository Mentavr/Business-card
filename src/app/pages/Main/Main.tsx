import About from '@/app/components/about/About';
import Hero from '@/app/components/hero/Hero';
import Works from '@/app/components/works/Works';
import Line from '@/app/features/line/Line';

const Main = () => {
    return (
        <main className="container">
            <Hero />
            <Line />
            <Works />
            <Line />
            <About />
            <Line />
        </main>
    );
};
export default Main;
