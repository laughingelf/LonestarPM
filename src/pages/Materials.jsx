import BulkMaterialsPricing from "../components/MaterialPricing";
import PageHero from "../components/CommonHero";


const Materials = () => {

    return (

        <>
        <PageHero
        title="Bulk Materials and Delivery"
        subtitle="Clear pricing for 10+ yards with distance based hauling. Use the quick quote to see your total and schedule fast local delivery."
        ctaLabel="Get My Estimate"
        ctaLink="#quote"
        image="/img/lspm-header2.webp"
        />

        <BulkMaterialsPricing />
        </>

    )
};

export default Materials;
