import headerStyles from "@/styles/components/Header/header.module.scss";
import layoutStyles from "@/styles/layouts/layouts.module.scss";

export const Header = () => {
  return (
    <header className={layoutStyles.header}>
      <div className={layoutStyles.header_inner}>
        <div className={headerStyles.header}>
          <h1 className={headerStyles.header_logo}>Shiro</h1>
        </div>
      </div>
    </header>
  );
};
