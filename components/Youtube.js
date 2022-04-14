const Youtube = () => {
  return (
    <div style={{ flex: '2.5', height: '60%' }}>
      <iframe
        src="https://youtube.com/embed/M7lc1UVf-VE"
        width="300"
        height="300"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          borderRadius: '20px',
        }}
        loading="lazy"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Youtube;
