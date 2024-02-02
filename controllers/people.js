const express = require('express')
const People = require('../models/People')

const index = async (req, res, next) => {
  try {
    res.json(await People.find({}))
  } catch (error) {
    res.status(400).json(error)
  }
}

const create = async (req, res, next) => {
  try {
    res.json(await People.create(req.body))
  } catch (error) {
    res.status(400).json(error)
  }
}

const show = async (req, res, next) => {
  try {
    res.json(await People.findById(req.params.id))
  } catch (error) {
    res.status(400).json(error)
  }
}

const destroy = async (req, res, next) => {
  try {
    res.json(await People.findByIdAndDelete(req.params.id))
  } catch (error) {
    res.status(400).json(error)
  }
}

const update = async (req, res, next) => {
  try {
    res.json(await People.findByIdAndUpdate(req.params.id, req.body))
  } catch(error) {
    res.status(400).json(error)
  }
}

module.exports = {
  index,
  create,
  show,
  delete: destroy,
  update,
}