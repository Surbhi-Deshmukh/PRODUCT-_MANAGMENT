package com.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.entity.Products;
import com.repo.ProductsRepo;


@RestController
@CrossOrigin(maxAge = 3600)
public class productsController {

	@Autowired
	ProductsRepo repo;
	
	
	@GetMapping(path="/products")
	public List<Products> getProducts()
	{
		return repo.findAll();
	}
	
	@RequestMapping("/products/id/{id}")
	public Optional<Products> getID(@PathVariable("id") int id)
	{
		return repo.findById(id);

	}

	@RequestMapping("/products/code/{code}")
    public List<Products> getCode(@PathVariable("code") int code)
    {
        return repo.findByCode(code);

 

    }

    @RequestMapping("/products/name/{name}")
    public List<Products> getName(@PathVariable("name") String name)
    {
        return repo.findByName(name);

 

    }

    @GetMapping("/products/brand/{brandName}")
    public List<Products> getBrand(@PathVariable("brandName") String brandName)
    {
        return repo.findByBrand(brandName);

 

    }
	
	@GetMapping(path="/count-products")
	public long getProductCount() {
		return repo.count();
	}
	@PostMapping(path="/products",consumes= {"application/json"})
	@CrossOrigin(origins = "http://localhost:4200")
	public boolean addProducts(@RequestBody Products product) 
	{
		repo.save(product);
		return true;
		
	}
	
	
}
