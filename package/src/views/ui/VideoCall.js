import React, { useState, useRef } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import Webcam from 'react-webcam';
import { FaPlay, FaPause } from 'react-icons/fa';

const VideoRecorder = () => {
  const webcamRef = useRef(null);
  const [recording, setRecording] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [videoURL, setVideoURL] = useState(null);
  const [comments, setComments] = useState([]);
  const [currentComment, setCurrentComment] = useState('');

  const handleStartRecording = () => {
    setRecording(true);
    setRecordedChunks([]);
  };

  const handleStopRecording = () => {
    setRecording(false);
  };

  const handleDataAvailable = (event) => {
    if (event.data && event.data.size > 0) {
      setRecordedChunks((prevRecordedChunks) => [
        ...prevRecordedChunks,
        event.data,
      ]);
    }
  };

  const handleDownload = () => {
    const blob = new Blob(recordedChunks, { type: 'video/webm' });
    const url = URL.createObjectURL(blob);
    setVideoURL(url);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'recorded-video.webm';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleCommentChange = (event) => {
    setCurrentComment(event.target.value);
  };

  const handleAddComment = () => {
    if (currentComment.trim() !== '') {
      setComments((prevComments) => [...prevComments, currentComment]);
      setCurrentComment('');
    }
  };

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: 'user',
  };

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center vh-100">
      <Row>
        <Col>
          <div className="video-container">
            <Webcam style={{'width':'90%'}}
              audio={false}
              videoConstraints={videoConstraints}
              ref={webcamRef}
              mirrored
              className="video-stream"
            />
            {videoURL ? (
              <video src={videoURL} controls className="recorded-video" />
            ) : null}
            <div className="controls">
              {recording ? (
                <Button color="danger" onClick={handleStopRecording}>
                  <FaPause />
                </Button>
              ) : (
                <Button color="primary" onClick={handleStartRecording}>
                  <FaPlay />
                </Button>
              )}
              {videoURL ? (
                <Button color="success" onClick={handleDownload}>
                  Download
                </Button>
              ) : null}
            </div>
          </div>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <div className="comment-section">
            <h4>Comments</h4>
            <ul>
              {comments.map((comment, index) => (
                <li key={index}>{comment}</li>
              ))}
            </ul>
            <input
              type="text"
              value={currentComment}
              onChange={handleCommentChange}
              placeholder="Add a comment"
            />
            <Button color="primary" onClick={handleAddComment}>
              Add Comment
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default VideoRecorder;