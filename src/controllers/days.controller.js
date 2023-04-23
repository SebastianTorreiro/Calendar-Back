const getAllDays = async (req, res) => {
  {
    try {
      const allDays = await service.getAllDays();
      res.status(201).json(allDays);
    } catch (error) {
      res.status(404).json(error);
    }
  }
};



module.exports = {
    getAllDays
}