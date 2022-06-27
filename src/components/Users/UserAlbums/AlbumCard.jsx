import "./UserAlbums.scss";

export const AlbumCard = ({ item }) => {
  return <div className="albums__card">{item.title}</div>;
};
