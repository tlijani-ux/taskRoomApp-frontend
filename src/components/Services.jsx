// Services.js
import React from 'react';
import Product from './Product';

function Services() {
  return (
    <div className="container">
      <h2 id="services">Key Features</h2>
      <div className="flex">
        <Product
          imageSrc="../images/Seamless_Integration___integrates_with_email,_cale.png"
          title="Seamless Integration"
          description="TaskRoom integrates with email, calendar, and project management tools, streamlining workflows and managing manual data entry."
        />
        <Product
          imageSrc="../images/Scalability_and_Flexibility__scales_from_solo_entr.png"
          title="Scalability and Flexibility"
          description="TaskRoom scales from solo entrepreneurs to large enterprises, offering customizable workflows and features to adapt to diverse needs."
        />
        <Product
          imageSrc="../images/Enhanced_Security__prioritizes_data_security_with_.png"
          title="Enhanced Security"
          description="TaskRoom prioritizes data security with encryption, multi-factor authentication, and compliance standards, ensuring peace of mind for sensitive information."
        />
        </div>
        <div className="flex">
        <Product
          imageSrc="../images/Data-driven_Insights___offers_analytics_to_track_t.png"
          title="Data-driven Insights"
          description="TaskRoom offers analytics to track task completion rates, time spent, and project milestones, enabling informed decisions for continuous improvement."
        />
        <Product
          imageSrc="../images/Improved_Accountability__fosters_accountability_by.png"
          title="Improved Accountability"
          description="TaskRoom fosters accountability by transparently assigning tasks, setting deadlines, and tracking progress, ensuring team alignment and commitment."
        />
        <Product
          imageSrc="../images/Enhanced_Time_Management___optimizes_scheduling_wi.png"
          title="Enhanced Time Management"
          description="TaskRoom optimizes scheduling with due dates, reminders, and time tracking, fostering productivity and work-life balance."
        />
        
      </div>
    </div>
  );
}

export default Services;
