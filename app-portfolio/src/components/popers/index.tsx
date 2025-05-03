import * as React from "react";
import Typography from "@mui/material/Typography";
import Popper from "@mui/material/Popper";
import PopupState, { bindToggle, bindPopper } from "material-ui-popup-state";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";

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
              className="pt-2 cursor-pointer transition-transform duration-300 hover:scale-105"
              variant="h2"
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
                        p: 1,
                        bgcolor: "#1E3F66",
                        color: "white",
                      }}
                    >
                      <Typography sx={{ p: 1 }}>{content}</Typography>

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
