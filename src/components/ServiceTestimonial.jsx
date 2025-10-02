import styles from '@styles/ServiceTestimonial.module.scss';
import { serviceTestimonials } from '@data/servicesPageData';
import PageTitle from '@components/PageTitle';
import TestimonialCarousel from '@components/Testimonials/TestimonialCarousel';

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