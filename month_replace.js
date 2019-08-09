const dashCustomerData = {
    salesperson: "Evan Kilchenstein", sp_code: "EK", annual_base: 40000, pay_plan_model : [
        { min_store_count: 5, per_store_bonus: 250 },
        { min_store_count: 8, per_store_bonus: 250 },
        { min_store_count: 10, per_store_bonus: 250 },
        { min_store_count: 12, per_store_bonus: 300 },
        { min_store_count: 15, per_store_bonus: 325 },
        { min_store_count: 20, per_store_bonus: 335 },
        { min_store_count: 25, per_store_bonus: 365 },
        { min_store_count: 30, per_store_bonus: 380 },
        { min_store_count: 35, per_store_bonus: 390 },
        { min_store_count: 40, per_store_bonus: 440 }
    ],sp_pay_model:
        [
            { year: "2019", month: "Jun", ym_offset: 90, store_count: 35, per_store_bonus: 390 },
            { year: "2019", month: "May", ym_offset: 89, store_count: 30, per_store_bonus: 380 },
            { year: "2019", month: "Apr", ym_offset: 88, store_count: 30, per_store_bonus: 380 },
            { year: "2019", month: "Jan", ym_offset: 85, store_count: 21, per_store_bonus: 335 },
            { year: "2019", month: "Jul", ym_offset: 91, store_count: 43, per_store_bonus: 440 },
            { year: "2019", month: "Aug", ym_offset: 92, store_count: 0, per_store_bonus: 0 }
        ]
};

const allmonths = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];


let result = [];


allmonths.forEach(month => {
  const item = dashCustomerData.sp_pay_model.find(item => item.month === month);
  
  if (item) {
    result.push(item);
  } else {
    result.push({year: "Nil", month: month, ym_offset: 0, store_count: 0, per_store_bonus: 0});
  }
})
console.log(result);

//Sample test message   for   Commit 7  and older versions    forgot to include   and   one more thing    forgotted  to commit  and   something  more . 