import React from 'react';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import { Box, ButtonGroup } from '@mui/material';

const SocialShare = ({ relation }) => {
  const shareUrl = window.location.href;
  const message = `I found out that my relationship is ${relation} using this awesome FLAMES calculator!`;

  return (
    <Box sx={{ mt: 3 }}>
      <ButtonGroup variant="text" aria-label="social share buttons">
        <FacebookShareButton url={shareUrl} quote={message}>
          <img src="/icons/facebook.svg" alt="Facebook" width="32" />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl} title={message}>
          <img src="/icons/twitter.svg" alt="Twitter" width="32" />
        </TwitterShareButton>
        <WhatsappShareButton url={shareUrl} title={message}>
          <img src="/icons/whatsapp.svg" alt="WhatsApp" width="32" />
        </WhatsappShareButton>
      </ButtonGroup>
    </Box>
  );
};

export default SocialShare;
