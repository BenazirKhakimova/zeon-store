import { Card } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import "./MainCollection.css";
const MainColectionCard = ({item}) => {
    return (
        <Card
                key={item.id}
                style={{
                  width: "auto",
                  height: "auto",
                  overflow: "hidden",
                  marginTop: "18px",
                }}
              >
                <img className="collec-img" src={item.collImg} alt="img" />
                <h3 id="collec-title">{item.title}</h3>
                <Link to={`${item.link}`}>
                  <button className="collec-btn">Смотреть все</button>
                </Link>
              </Card>
    );
};

export default MainColectionCard;