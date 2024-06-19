package com.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.entity.ProductReview;
import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name="products")
public class Products {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int productId;
	private String name;
	private String brand;
	private int code;
	
	@OneToMany(mappedBy = "product")
	private List<ProductReview> review;
	/***
	 * 
	 * @param productName
	 * @param brandName
	 * @param code
	 * @param review
	 */
	public Products(int productId, String productName, String brandName, int code, List<ProductReview> review) {
		super();
		this.productId = productId;
		this.name = productName;
		this.brand = brandName;
		this.code = code;
		this.review = review;
	}
	
	public List<ProductReview> getReview() {
		return review;
	}
	public void setReview(List<ProductReview> review) {
		this.review = review;
	}
	public Products() {}
	
	public int getProductId() {
		return productId;
	}
	public void setProductId(int productId) {
		this.productId = productId;
	}
	public String getProductName() {
		return name;
	}
	public void setProductName(String productName) {
		this.name = productName;
	}
	public String getBrandName() {
		return brand;
	}
	public void setBrandName(String brandName) {
		this.brand = brandName;
	}
	
	
	public int getCode() {
		return code;
	}

	public void setCode(int code) {
		this.code = code;
	}

	@Override
	public String toString() {
		return "Product [productId=" + productId + ", name=" + name + ", brand=" + brand
				+ ", code=" + code + ", review=" + review + "]";
	}
	
	
	

}