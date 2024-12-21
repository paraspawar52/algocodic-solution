import {useState} from 'react'
import Card from "@/Components/Card";
import Development_approach from "@/Components/Development_approach";
import Faq from "@/Components/Faq";
import Great_software from "@/Components/Great_software";
import Hero_section from "@/Components/Hero_section";
import Projects from "@/Components/Projects";


export default function Home() {
  return (
    <>
      <Hero_section/>
      <Card/>
      <Projects/>
      <Great_software/>
      <Development_approach/>
      <Faq/>
    </>
  );
}
