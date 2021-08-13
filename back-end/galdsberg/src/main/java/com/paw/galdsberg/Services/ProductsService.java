package com.paw.galdsberg.Services;

import com.paw.galdsberg.Entities.Beer;
import com.paw.galdsberg.Repositories.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ProductsService {
    @Autowired
    private ProductsRepository productsRepository;

    public List<Beer> listAll(){
        return productsRepository.findAll();
    }

    public Optional<Beer> getBeer(Integer id){
        return productsRepository.findById(id);

    }

    public void addBeer(Beer b){

        productsRepository.save(b);
    }

    public void deleteBeer(Integer id){
        productsRepository.deleteById(id);
    }

    public Beer updateBeer(Beer b,Integer id){
        Optional<Beer> existBeer=productsRepository.findById(id);
        if(existBeer.isPresent()){
            Beer updatedBeer= new Beer();
            updatedBeer.setId(existBeer.get().getId());
            updatedBeer.setQuantity(existBeer.get().getQuantity());
            updatedBeer.setAlc_vol(b.getAlc_vol());
            updatedBeer.setCountry(b.getCountry());
            updatedBeer.setDescription(b.getDescription());
            updatedBeer.setImg_name(b.getImg_name());
            updatedBeer.setName(b.getName());
            updatedBeer.setPrice(b.getPrice());
            updatedBeer.setType(b.getType());
            return updatedBeer;
        }
        return existBeer.get();
    }

    public List<Beer> getBeersOfType(String type){
        List<Beer> listBeer=productsRepository.findAll();
        List<Beer> result=new ArrayList<>();
        for (Beer beer : listBeer) {
            if (beer.getType().equals(type)) {
                result.add(beer);
            }
        }
       return result;
    }
}
