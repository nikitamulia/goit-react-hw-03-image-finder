import React from "react";
import PropTypes from 'prop-types';
import s from './Modal.module.css'

export default class Modal extends React.Component {

  static propTypes = {
    toggleModal: PropTypes.func.isRequired,
    largeImage: PropTypes.string.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    e.code === 'Escape' && this.props.toggleModal();
  };

  handleBackdropClick = e => {
    e.target === e.currentTarget && this.props.toggleModal();
  };

  render() {
    const { handleBackdropClick } = this;
    const { largeImage } = this.props;
    return (
      <div className={s.Overlay} onClick={handleBackdropClick}>
        <div className={s.Modal}>
          <img src={largeImage} alt="" />
        </div>
      </div>
    );
  }
}