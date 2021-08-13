package com.paw.galdsberg.Controllers;


import com.paw.galdsberg.Entities.Beer;
import com.paw.galdsberg.Entities.User;
import com.paw.galdsberg.Services.JwtUtilService;
import com.paw.galdsberg.Services.ProductsService;
import com.paw.galdsberg.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:4200/products/category/"})
@RestController
public class ProductsController {
    @Autowired
    public ProductsService productsService;

    @GetMapping("/products")
    public List<Beer> list(){
        return productsService.listAll();
    }

    @GetMapping("/products/{id}")
    public Optional<Beer> getBeer(@PathVariable Integer id){
        return productsService.getBeer(id);
    }

    @PostMapping("/products")
    public List<Beer> addBeer(@RequestBody Beer b){
        productsService.addBeer(b);
        return productsService.listAll();
    }

    @DeleteMapping("/products/{id}")
    public List<Beer> removeBeer(@PathVariable Integer id, @RequestHeader("Authorization") String authorizationHeader){

        productsService.deleteBeer(id);
        return productsService.listAll();

    }

    @PutMapping("/products/{id}")
    public ResponseEntity<?> updateBeer(@RequestBody Beer b, @PathVariable Integer id){

          try{
              Beer updatedBeer=productsService.updateBeer(b,id);
              productsService.addBeer(updatedBeer);
              return new ResponseEntity<>(HttpStatus.OK);
          }catch(NoSuchElementException e){
              return new ResponseEntity<>(HttpStatus.NOT_FOUND);
          }
    }

    @GetMapping("/products/category/{type}")
    public List<Beer> getBeersType(@PathVariable String type){
        return productsService.getBeersOfType(type);
    }
}
