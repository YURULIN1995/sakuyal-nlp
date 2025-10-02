import styles from '@styles/SelfStudyCourseTestimonial.module.scss';
import { selfStudyCourseTestimonials } from '@data/selfStudyCourseData';
import PageTitle from '@components/PageTitle';
import TestimonialCarousel from '@components/Testimonials/TestimonialCarousel';

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