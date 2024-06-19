package com.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.entity.ProductReview;

public interface ProductReviewRepo extends JpaRepository<ProductReview, Integer> {

}