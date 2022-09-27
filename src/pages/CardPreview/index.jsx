import React, { useEffect, Suspense } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, Spacer } from '@chakra-ui/react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';
const Card = React.lazy(() => import('../../components/Card'));
const CardPreview = () => {
  const { t, i18n } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const { allCardsInfo } = useSelector((state) => state);
  const card = allCardsInfo.cardsCollection.find(
    (eachCard) => eachCard.id === id
  );
  useEffect(() => {
    !card && navigate('/does-not-exist');
  }, []);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Button onClick={handleGoBack} variant="link" fontSize="2xl">
        <AiOutlineArrowLeft />
        {t('pages.goBack')}
      </Button>
      <Spacer h="12" />
      <Card data={card} editing={true} cardType="previewCard" />
    </Suspense>
  );
};

export default CardPreview;
