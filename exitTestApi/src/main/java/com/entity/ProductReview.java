package com.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="review")
/***
 * return the Product Review Data
 * @author utkarshsrivastava01
 *
 */
public class ProductReview {
	public ProductReview() {}
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int reviewId;
	private String review;
	private String rating;
	private String state;
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getRating() {
		return rating;
	}
	public void setRating(String rating) {
		this.rating = rating;
	}
	
	@ManyToOne
	@JsonIgnoreProperties("review")
	private Products product;
	public int getReviewId() {
		return reviewId;
	}
	public void setReviewId(int reviewId) {
		this.reviewId = reviewId;
	}
	public String getReview() {
		return review;
	}
	public void setReview(String review) {
		this.review = review;
	}
	public Products getProduct() {
		return product;
	}
	public void setProduct(Products product) {
		this.product = product;
	}
	@Override
	public String toString() {
		return "ProductReview [reviewId=" + reviewId + ", review=" + review + ", rating=" + rating + ", state=" + state
				+ ", product=" + product + "]";
	}
	
	

}
