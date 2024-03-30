// import React from 'react';
import { useEffect, useState } from 'react';
import Hero from "../../components/hero/Hero";
import './home.scss';
import Features from '../../components/features/Features';
import { features } from '../../datas/data';

const Home = () => {
    const [dataFeatures, setDatafeatures] = useState([])

    useEffect(() => {
        setDatafeatures(features)
    }, [])

    return (
        <div className="body">
            <Hero />
            <section className="features">
                <h2 className="sr-only">Features</h2>
                {dataFeatures.map((item, index) => (
                    <Features key={index} picture={item.picture} title={item.title} description={item.description} />
                )
                )}
            </section>
        </div>
    );
};

export default Home;