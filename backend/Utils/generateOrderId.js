import crypto from 'crypto';

export default generateOrderId =()=> {
  return 'ORD-' + crypto.randomBytes(5).toString('hex').toUpperCase();
}
