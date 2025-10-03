import styles from '@styles/SelfStudyCourseTestimonial.module.scss';
import { selfStudyCourseTestimonials } from '@data/selfStudyCourseData';
import PageTitle from '@/PostPage.jsx/PageTitle';
import TestimonialCarousel from '@/PostPage.jsx/Testimonials/TestimonialCarousel';

function SelfStudyCourseTestimonial() {
    const { name, list } =selfStudyCourseTestimonials;
    return(
        <div className={styles.wrap}>
            <PageTitle title={name}/>
            <TestimonialCarousel testimonials={list}/>
        </div>
    );
}
export default SelfStudyCourseTestimonial;