import styles from '@styles/ServiceTestimonial.module.scss';
import { serviceTestimonials } from '@data/servicesPageData';
import PageTitle from '@/PostPage.jsx/PageTitle';
import TestimonialCarousel from '@/PostPage.jsx/Testimonials/TestimonialCarousel';

function ServiceTestimonial() {
    const { name, list } = serviceTestimonials;

    return(
        <div className={styles.wrap}>
            <PageTitle title={name}/>
            <TestimonialCarousel testimonials={list}/>
        </div>
    );
}
export default ServiceTestimonial;