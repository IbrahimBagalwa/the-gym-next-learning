import MainFooter from './mainFooter';
import MainNavigation from './mainNavigation';

function Layout({ children }) {
  return (
    <div>
      <MainNavigation />
      <main>{children}</main>
      <footer>
        <MainFooter />
      </footer>
    </div>
  );
}

export default Layout;
