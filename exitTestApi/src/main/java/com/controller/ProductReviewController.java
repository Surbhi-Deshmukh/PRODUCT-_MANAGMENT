package com.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.entity.ProductReview;
import com.entity.Products;
import com.entity.Users;
import com.repo.ProductReviewRepo;
import com.repo.ProductsRepo;


@RestController
@CrossOrigin(maxAge = 3600)
public class ProductReviewController {

	@Autowired
	ProductReviewRepo repo;
	@Autowired
	ProductsRepo repo1;
	
	@GetMapping(path="/count-reviews")
	public long getProductCount() {
		return repo.count();
	}
	@PostMapping(path="/productReview/{id}",consumes= {"application/json"})
	@CrossOrigin(origins = "http://localhost:4200")
	public ProductReview addProducts(@PathVariable("id") int id,@RequestBody ProductReview product) 
	{
		Products p = repo1.findById(id).orElseThrow();
		product.setProduct(p);
		repo.save(product);
		return product;
	
	}
	@GetMapping(path="/getReviews") 
	public List<ProductReview> getAllReviews() {
		return repo.findAll();
	}
	@SuppressWarnings("rawtypes")
	@PutMapping("/status/update/{id}/{state}")
	@CrossOrigin
	public ProductReview updateReview(@PathVariable("state") String state, @PathVariable("id") int id) {
		ProductReview r = repo.findById(id).orElseThrow();
		r.setState(state);
		repo.save(r);
		return r;
	}
	
}
