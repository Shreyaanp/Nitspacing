import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React from 'react';
import PropTypes from "prop-types";
import { Link, useLocation } from 'react-router-dom';
import "./Feedback.css";

const Feedback = ({themeMode}) => {

    let location = useLocation();
    let previousRoute = location.state || "/dashboard";

  return (
    <div>
        <Dialog className="Feedback" open={true}>
            <DialogTitle className={`Feedback__title ${themeMode}`}>Feedback</DialogTitle>
            <DialogContent className={`Feedback__content ${themeMode}`}>
                <DialogContentText className={`Feedback__content-text ${themeMode}`}>
                    This is an ungoing project for Social Information and Network class. If there are any feedbacks, please contact me at <a href="mailto:shreyaan.work@gmail.com">shreyaan.work@gmail.com</a>
                    You can also view my other projects at <a href="https://www.shreyaan.codes/">shreyaan.codes</a>
                </DialogContentText>
            </DialogContent>
            <DialogActions className={`Feedback__actions ${themeMode}`}>
                <Link tabIndex={-1} to={previousRoute}>
                    <Button tabIndex={0}>Go back</Button>
                </Link>
                <Link tabIndex={-1} target='_blank' to="https://github.com/Shreyaanp">
                    <Button tabIndex={0}>Go to GitHub</Button>
                </Link>
            </DialogActions>
        </Dialog>
    </div>
  );
}

Feedback.propTypes = {
    themeMode: PropTypes.string,
  };


export default Feedback;