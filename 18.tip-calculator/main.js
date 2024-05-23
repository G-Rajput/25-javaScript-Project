const generateBillButton = document.querySelector(".generate-bill");
const billAmount = document.querySelector(".bill-amount");
const discountPercentage = document.querySelector(".discount-percentage");
const tipsPercentage = document.querySelector(".tip-percentage");
const noOfCustomers = document.querySelector(".no-of-customers");
const totaltipPaid = document.querySelector(".total-tip-paid");
const totalAmountToPay = document.querySelector(".total-amount-to-pay");
const totalTipPercentageValue = document.querySelector(".tip-value");
const discountPercentageValue = document.querySelector(".discount-value");
const totalNoOfCustomersValue = document.querySelector(
  ".no-of-customers-value"
);
const eachCustomerToPay = document.querySelector(".each-customer-to-pay");

function calculateBill() {
  console.log(
    billAmount.value,
    tipsPercentage.value,
    discountPercentage.value,
    noOfCustomers.value
  );

  const billAmountAfterDiscountPercentage =
    billAmount.value - (discountPercentage.value * billAmount.value) / 100;

  const getTipAmmount =
    billAmountAfterDiscountPercentage * (tipsPercentage.value / 100);
  const totalBill = billAmountAfterDiscountPercentage + getTipAmmount;
  const eachCustomerToPayAmount = totalBill / noOfCustomers.value;

  totaltipPaid.textContent = getTipAmmount;
  totalAmountToPay.textContent = totalBill;
  totalTipPercentageValue.textContent = tipsPercentage.value;
  discountPercentageValue.textContent = discountPercentage.value;
  totalNoOfCustomersValue.textContent = noOfCustomers.value;
  eachCustomerToPay.textContent = eachCustomerToPayAmount;
}

generateBillButton.addEventListener("click", calculateBill);
