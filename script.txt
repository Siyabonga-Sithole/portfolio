.projects-carousel {
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch; /* optional */
}

.project-box {
  flex: 0 0 auto;
  width: 300px;
  height: 200px;
  margin-right: 20px;
  background-color: #f0f0f0;
  scroll-snap-align: start;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}
