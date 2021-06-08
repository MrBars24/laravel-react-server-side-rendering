import { LOAD_ITEMS, ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM, CLEAR_ITEMS} from './actions';

export const INITIAL_STATE = {
  items: [],
  qty: 0,
  totalPrice: 0
};

export const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case LOAD_ITEMS:
        let qty = 0;
        let totalPrice = 0;
        action.items.forEach(item => {
          qty += +item.productQty;
          totalPrice += +item.productQty * +item.price;
        });

        return {
          items: action.items,
          qty: qty,
          totalPrice: totalPrice
        };
      case ADD_ITEM:
        let items = [...state.items, action.item];

        return {
          items: items,
          qty: state.qty + +action.item.productQty,
          totalPrice: state.totalPrice + +action.item.price,
        };
      case REMOVE_ITEM:
        let newItems = state.items.filter(item => item.cartId !== action.id);

        return {
          items: newItems,
          qty: state.qty - +action.item.productQty,
          totalPrice: state.totalPrice - +action.item.price,
        };
      case CLEAR_ITEMS:
        return INITIAL_STATE;
      case UPDATE_ITEM:
        let oldQty = action.oldItem.productQty;
        let newQty = action.newItem.productQty;
        let oldPrice = (+action.oldItem.price) * (+action.oldItem.productQty);
        let newPrice = (+action.oldItem.price) * (+action.newItem.productQty);
        let computedQty = 0;
        let computedPrice = 0;
        let updatedItems = state.items;
        updatedItems[action.index] = {
          ...updatedItems[action.index],
          productQty: newQty
        }

        if (oldQty > newQty) {
          computedQty = oldQty - (oldQty - newQty);
          computedPrice = +oldPrice - (+oldPrice - +newPrice);
        }

        if (oldQty < newQty) {
          computedQty = newQty;
          computedPrice = +newPrice;
        }

        // return {
        //   items: state.items,
        //   qty: state.qty,
        //   totalPrice: state.totalPrice,
        // };
        // console.log({
        //   items: state.items,
        //   qty: (state.qty - +oldQty) + computedQty,
        //   totalPrice: (state.totalPrice - +oldPrice) + computedPrice,
        // });

        return {
          items: updatedItems,
          qty: (state.qty - +oldQty) + computedQty,
          totalPrice: (state.totalPrice - +oldPrice) + computedPrice,
        };
        
      default:
        return state;
    }
}