import * as React from 'react';
import Typography from '@mui/material/Typography';
import Popper from '@mui/material/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';

interface PopperProps {
  title: string;
  content: React.ReactNode;
}

function PopperPopupState({ title, content }: PopperProps) {
  return (
    <PopupState variant="popper" popupId="demo-popup-popper">
      {(popupState) => (
        <ClickAwayListener onClickAway={() => popupState.close()}>
          <div>
            <Typography
              className="text-white hover:text-orange-400 transition-colors duration-300 cursor-pointer"
              variant="h3"
              {...bindToggle(popupState)}
            >
              {title}
            </Typography>

            <Popper {...bindPopper(popupState)} transition>
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <Paper>
                    <Box
                      sx={{
                        border: 1,
                        p: 2,
                        bgcolor: '#1E3F66',
                        color: 'white',
                        borderRadius: 2,
                      }}
                    >
                      <Typography sx={{ p: 2 }}>{content}</Typography>

                      <div className="flex flex-row justify-between">
                        <div></div>
                        <div
                          className="cursor-pointer text-orange-400 hover:text-orange-500"
                          onClick={popupState.close}
                        >
                          Close
                        </div>
                      </div>
                    </Box>
                  </Paper>
                </Fade>
              )}
            </Popper>
          </div>
        </ClickAwayListener>
      )}
    </PopupState>
  );
}

export default PopperPopupState;
