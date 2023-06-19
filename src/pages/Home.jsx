import { Typography, Box } from '@mui/material';
import {
  titleStyle,
  centredItemsStyles,
  typographyStyle,
  wrapperStyle,
} from 'shared/basicStyles';
import Icon from 'img/follow.png';

export const Home = () => {
  return (
    <Box>
      <Box
        sx={{
          ...centredItemsStyles,
          gap: '30px',
          justifyContent: 'flex-start',
          mb: '28px',
          flexWrap: 'wrap',
        }}
      >
        <img src={Icon} alt="" width={90} height={90} />
        <Typography component="h1" sx={titleStyle}>
          Tweets
        </Typography>
      </Box>

      <Box sx={wrapperStyle}>

        <Typography sx={{ ...typographyStyle, fontSize: '24px', mb: '32px' }}>
           This is a simple application with a nice design for managing tweets, there is
          an option to filter by follow status
        </Typography>

      </Box>
    </Box>
  );
};