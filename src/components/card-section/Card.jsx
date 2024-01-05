import React from "react";
import CardData from "./CardData";
import SmsImg from "../../img/SMS-Notifications.jpg";
import PartsImg from "../../img/Mobile-Parts.jpg";
import SuppliersImg from "../../img/Suppliers.jpg";

function Card() {
  return (
    <div className="container-md my-5 text-center ">
      <div className="display-4 my-2 border-3 border-bottom border-primary">
        Services We Offer Just For You
      </div>
      <div className="lead text-muted mb-4">
        From RepairEase You can Access to these Valuable services which fit your
        business
      </div>
      <div className="row justify-content-center text-center align-items-center gy-2">
        <CardData
          img={SmsImg}
          title="SMS Notifications"
          subTitle="Send SMS to your clients"
          text="You can send SMS notifications to your Clients about their repair job status, So no more Calls"
          btnTxt="Start Sending"
        />

        <CardData
          img={PartsImg}
          title="Stock Manage"
          subTitle="Manage Mobile Part Stock"
          text="Manage your Mobile Repair  centre mobile accessories stock with our stock management facility"
          btnTxt="Manage With RepairEase"
        />

        <CardData
          img={SuppliersImg}
          title="Suppliers Manage"
          subTitle="Ease your Supplier Management"
          text="Manage all your suppliers by using RepairEase with just some clicks with a relax mind"
          btnTxt="Manage Suppliers"
        />
      </div>
    </div>
  );
}

export default Card;
