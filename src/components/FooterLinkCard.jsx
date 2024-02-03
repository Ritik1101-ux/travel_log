const FooterLinkCard = ({ title, links }) => {

  return (
    <div className="flex flex-col max-xs:my-4">
      <p className="text-xl font-bold py-2 max-xs:text-center">{title}</p>
      <div className="flex flex-col max:xs:items-center">
        {links.map((linkItem) => (
          <a href={linkItem.link} key={linkItem.name} className="text-slate-gray max-xs:text-center font-semibold py-1">
            {linkItem.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterLinkCard;
