import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Card from '../../components/Card';
import { useSelector } from 'react-redux';
import { Button, Spacer } from '@chakra-ui/react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
const CardPreview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const { allCardsInfo } = useSelector((state) => state);
  const card = allCardsInfo.cardsCollection.find(
    (eachCard) => eachCard.id === id
  );
  return (
    <>
      <Button onClick={handleGoBack} variant="link" fontSize="2xl">
        <AiOutlineArrowLeft /> Go Back
      </Button>
      <Spacer h="12" />
      <Card data={card} editing={true} cardType="previewCard" />
    </>
  );
};

export default CardPreview;
