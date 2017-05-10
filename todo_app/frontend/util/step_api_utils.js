const StepAPIUtils = {
  createStep: function(step){
    console.log(step);
    return $.ajax({
      method:"POST",
      url:"api/steps",
      data: {step}
    });
  },
  deleteStep: function(step){
    return $.ajax({
      method:"DELETE",
      url:`api/steps/${step.id}`
    });
  },
  updateStep: function(step){
    return $.ajax({
      method:"PATCH",
      url:`api/steps/${step.id}`,
      data: {step}
    });
  }
};

export default StepAPIUtils;
