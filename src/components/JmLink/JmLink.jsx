import './JmLink.scss';

function JmLink(props) {
  const { href, text } = props;
  return (
    <a className="JmLink" href={href} target="_blank" rel="noopener noreferrer">{text}</a>
  );
}

export default JmLink;
