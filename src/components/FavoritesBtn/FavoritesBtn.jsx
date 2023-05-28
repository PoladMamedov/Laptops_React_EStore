export function FavoritesBtn(props) {
  return (
    <button data-testid="fav-btn" type="button" className="btn btn-light border-secondary position-relative pt-0">
      <img width={20} height={20} src="./img/star-active.png" alt="star" />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {props.favItemsCount}
      </span>
    </button>
  );
}