import Skills from '@/app/components/skills/Skills';
import About from '@/app/components/about/About';
import Line from '@/app/features/line/Line';
import Experience from '@/app/components/experience/Experience';

const AboutMe = () => {
    return (
        <main className="container" id="header">
            <About />
            <Line/>
            <Skills />
            <Line />
            <Experience />
            <Line />
        </main>
    );
};
export default AboutMe;
