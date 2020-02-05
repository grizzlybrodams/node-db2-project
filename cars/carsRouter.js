const express = require('express');

const db = require('../data/db-config');

const router = express.Router();
router.use(express.json());


router.get('/', async ( req,res ) => {
  try{
    const car = await db('cars');
    res.status(200).json(car);
  } catch (err) {
    res.status(500).json({message: 'Failed to get the cars!', err});
  };
});

router.get('/:id', async ( req,res ) => {
  const { id } = req.params;
  try{
    const car = await db('cars').where('id', id);
    res.status(200).json(car);
  } catch (err) {
    res.status(500).json({message: 'Failed to get the car!', err});
  };
});

router.post('/', async ( req,res ) => {
  const body = req.body;
  try{
    const car = await db('cars').insert(body);
    res.status(201).json(car);
  } catch (err) {
    res.status(500).json({message: 'Failed to update', err});
  };
});

router.put('/:id', async ( req,res ) => {
  const { id } = req.params;
  const body = req.body;

  try{
    const car = await db('cars').where('id', id)
    .update(body);
    res.status(200).json(car);
  } catch (err) {
    res.status(500).json({message: 'Failed to get the car!', err});
  };
});

router.delete('/:id', async ( req,res ) => {
  const { id } = req.params;

  try{
    const car = await db('cars').where('id', id)
    .del();
    res.status(200).json(car);
  } catch (err) {
    res.status(500).json({message: 'Failed to get the car!', err});
  };
});

module.exports = router;