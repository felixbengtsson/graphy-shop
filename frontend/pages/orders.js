import PleaseSignIn from '../components/PleaseSignIn';
import OrderList from '../components/OrderList';

const OrderListPage = props => (
  <div>
    <PleaseSignIn>
      <OrderList />
    </PleaseSignIn>
  </div>
);

export default OrderListPage;
